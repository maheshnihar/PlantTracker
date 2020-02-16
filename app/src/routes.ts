import express from 'express';
import * as apiController from './api';

const router = express.Router();

// curl -X GET http://localhost:8080/plantracker/app/health
router.get('/health', apiController.healthCheck);

export default router;
