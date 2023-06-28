import {createServer} from 'http'
import app from './express.ts';

const httpServer = createServer(app)

export default httpServer