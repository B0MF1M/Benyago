import FtpDeploy from 'ftp-deploy'
import dotenv from 'dotenv'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

// Carrega as variáveis do arquivo .env
dotenv.config()

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

const ftpDeploy = new FtpDeploy()

const config = {
  user: process.env.FTP_USER,
  password: process.env.FTP_PASSWORD,
  host: process.env.FTP_HOST,
  port: parseInt(process.env.FTP_PORT || '21', 10),
  localRoot: join(root, '.output', 'public'),
  remoteRoot: process.env.FTP_REMOTE_ROOT || '/public_html',
  include: ['*', '**/*', '.*', '**/.*'],  // Envia todos os arquivos e pastas (incluindo .htaccess)
  exclude: [],                 // Arquivos a excluir do deploy
  deleteRemote: false,         // Mudar para true se quiser limpar o servidor antes de subir (cuidado!)
  forcePasv: true,             // Usa modo passivo (geralmente necessário para Hostinger)
  sftp: false                  // Usa FTP simples (se quiser usar SFTP, mude para true e ajuste a porta para 22)
}

async function deploy() {
  console.log('🚀 Iniciando deploy automático para a Hostinger...')
  
  if (!config.host || !config.user || !config.password) {
    console.error('\n❌ ERRO: Dados de acesso FTP ausentes no arquivo .env!')
    console.error('Por favor, edite o arquivo ".env" e preencha as variáveis FTP_HOST, FTP_USER e FTP_PASSWORD.\n')
    process.exit(1)
  }

  console.log(`📡 Conectando a ${config.host}:${config.port}...`)
  console.log(`📁 Pasta local: ${config.localRoot}`)
  console.log(`📁 Pasta remota: ${config.remoteRoot}\n`)

  ftpDeploy.on('uploading', (data) => {
    // Exibe o progresso de cada arquivo
    const percent = Math.round((data.transferredFileCount / data.totalFilesCount) * 100)
    console.log(`[${percent}%] (${data.transferredFileCount}/${data.totalFilesCount}) Enviando: ${data.filename}`)
  })

  ftpDeploy.on('upload-error', (data) => {
    console.error(`❌ Falha ao enviar o arquivo: ${data.filename} - Erro:`, data.err)
  })

  try {
    const result = await ftpDeploy.deploy(config)
    console.log('\n✨ Deploy concluído com sucesso!')
    console.log('🔗 Seu site já está atualizado na Hostinger!')
  } catch (err) {
    console.error('\n❌ Ocorreu um erro crítico durante o deploy:', err.message || err)
    process.exit(1)
  }
}

deploy()
