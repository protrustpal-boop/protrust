
import express from 'express';
import { adminAuth } from '../middleware/auth.js';
import { updateInventoryByProductColorSize, getInventory, getProductInventory, updateInventory, addInventory, getLowStockItems, bulkUpdateInventory, moveStockBetweenWarehouses } from '../controllers/inventoryController.js';
import { getInventoryAnalytics, getStockMovements, getTurnoverAnalysis, getCategoryBreakdown, getLocationAnalysis, getInventoryAlerts, exportInventoryAnalytics, getPredictiveAnalytics, getSeasonalAnalysis, getCostAnalysis, getSupplierPerformance, getAdvancedMetrics } from '../controllers/inventoryAnalyticsController.js';

const router = express.Router();

// Move stock between warehouses
router.post('/move', adminAuth, moveStockBetweenWarehouses);

// Update inventory by product, color, and size
router.put('/by-combo', adminAuth, updateInventoryByProductColorSize);

// Basic inventory operations
router.get('/', adminAuth, getInventory);
router.get('/product/:productId', adminAuth, getProductInventory);
router.get('/low-stock', adminAuth, getLowStockItems);
router.post('/', adminAuth, addInventory);
router.put('/:id', adminAuth, updateInventory);
router.post('/bulk', adminAuth, bulkUpdateInventory);

// Analytics endpoints
router.get('/analytics', adminAuth, getInventoryAnalytics);
router.get('/movements', adminAuth, getStockMovements);
router.get('/turnover', adminAuth, getTurnoverAnalysis);
router.get('/categories', adminAuth, getCategoryBreakdown);
router.get('/locations', adminAuth, getLocationAnalysis);
router.get('/alerts', adminAuth, getInventoryAlerts);
router.get('/export', adminAuth, exportInventoryAnalytics);

// Enhanced analytics endpoints
router.get('/analytics/predictive', adminAuth, getPredictiveAnalytics);
router.get('/analytics/seasonal', adminAuth, getSeasonalAnalysis);
router.get('/analytics/cost', adminAuth, getCostAnalysis);
router.get('/analytics/suppliers', adminAuth, getSupplierPerformance);
router.get('/analytics/advanced', adminAuth, getAdvancedMetrics);

export default router;