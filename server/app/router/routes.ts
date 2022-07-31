import { Router } from 'express';
import { itemDetailController } from '../controller/item/detail';
import { searchItem } from '../controller/item/search';


/* en este file se van a interceptar las rutas(request) que vengan desde el client al server.*/
const router = Router();

/* esta ruta intercepta con la del cliente, tiene que ser tal cual como se llame aca, por ejemplo: api/items/${id} */
router.get('/items', searchItem)
router.get('/items/:id', itemDetailController);

export default router;