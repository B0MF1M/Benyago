/**
 * Gera um favicon.ico válido (formato ICO real com múltiplos tamanhos)
 * a partir de logo-benyago.jpg usando sharp para gerar os PNGs
 * e montando o ICO manualmente conforme a especificação do formato.
 */
import sharp from 'sharp'
import { readFileSync, writeFileSync, existsSync, copyFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const input = join(root, 'app', 'public', 'favicon.svg')
const publicDir = join(root, 'app', 'public')

async function pngBuffer(size) {
  return sharp(input)
    .trim()
    .resize(size, size, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .png()
    .toBuffer()
}

function buildIco(images) {
  // images = array de { size, buffer }
  const count = images.length
  const headerSize = 6
  const dirEntrySize = 16
  const dirSize = count * dirEntrySize
  const totalHeaderSize = headerSize + dirSize

  let offset = totalHeaderSize
  const entries = []

  for (const { size, buffer } of images) {
    entries.push({ size, buffer, offset })
    offset += buffer.length
  }

  const totalSize = offset
  const ico = Buffer.alloc(totalSize)

  // ICO header
  ico.writeUInt16LE(0, 0)     // Reserved (must be 0)
  ico.writeUInt16LE(1, 2)     // Type: 1 = ICO
  ico.writeUInt16LE(count, 4) // Image count

  // Directory entries
  for (let i = 0; i < entries.length; i++) {
    const { size, buffer, offset } = entries[i]
    const base = headerSize + i * dirEntrySize
    ico.writeUInt8(size === 256 ? 0 : size, base)      // Width (0 = 256)
    ico.writeUInt8(size === 256 ? 0 : size, base + 1)  // Height
    ico.writeUInt8(0, base + 2)   // Color palette count
    ico.writeUInt8(0, base + 3)   // Reserved
    ico.writeUInt16LE(1, base + 4)  // Color planes
    ico.writeUInt16LE(32, base + 6) // Bits per pixel
    ico.writeUInt32LE(buffer.length, base + 8) // Size of image data
    ico.writeUInt32LE(offset, base + 12)       // Offset of image data
  }

  // Image data
  for (const { buffer, offset } of entries) {
    buffer.copy(ico, offset)
  }

  return ico
}

async function main() {
  // Se existir o favicon.svg na raiz, copia para app/public
  const rootSvg = join(root, 'public', 'favicon.svg')
  const destSvg = join(root, 'app', 'public', 'favicon.svg')
  if (existsSync(rootSvg)) {
    copyFileSync(rootSvg, destSvg)
    console.log('✔ Copiado favicon.svg da raiz para app/public/')
  }

  console.log('Gerando favicon.ico válido...')

  const sizes = [16, 32, 48]
  const images = []

  for (const size of sizes) {
    const buffer = await pngBuffer(size)
    images.push({ size, buffer })
    console.log(`  ✔ ${size}x${size} PNG gerado (${buffer.length} bytes)`)
  }

  const ico = buildIco(images)
  writeFileSync(join(publicDir, 'favicon.ico'), ico)
  console.log(`\n✅ favicon.ico gerado com sucesso! (${ico.length} bytes, formato ICO válido)`)

  // Regenera os PNGs também com fundo branco limpo e recortado
  await sharp(input)
    .trim()
    .resize(16, 16, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .png()
    .toFile(join(publicDir, 'favicon-16x16.png'))
  console.log('✔ favicon-16x16.png')

  await sharp(input)
    .trim()
    .resize(32, 32, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .png()
    .toFile(join(publicDir, 'favicon-32x32.png'))
  console.log('✔ favicon-32x32.png')

  await sharp(input)
    .trim()
    .resize(180, 180, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .png()
    .toFile(join(publicDir, 'apple-touch-icon.png'))
  console.log('✔ apple-touch-icon.png')
}

main().catch(console.error)
