import { Router } from 'express'
import userController from '../controllers/UserController'

import loginRequired from '../middlewares/loginRequired'

const router = new Router()

// Não deveria existir
//router.get('/', userController.index)
//router.get('/:id', userController.show)

// 
router.post('/', loginRequired, userController.store)
router.put('/', loginRequired, userController.update)
router.delete('/', loginRequired, userController.delete)

export default router

/*
index -> lista todos os usuarios -> GET
store/create -> cria um novo usuario -> POST
delete -> apaga um usuario -> DELETE
show -> mostra um usuario -> GET
update -> atualiza um usuario -> PATCH( altera somente um valor) ou PUT(pega um objeto inteiro e substitui por outro objeto inteiro)
*/