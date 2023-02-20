const express = require('express');
const router = express.Router();

const { getAllEmpoyees, 
        createNewEmployee,
        updateEmployee,
        deleteEmployee,
        getEmployee} = require('../../controllers/employees')


router.route('/')
    .get(getAllEmpoyees)
    .post(createNewEmployee)
    .put(updateEmployee)
    .delete(deleteEmployee)

router.route('/:id')
    .get(getEmployee)


module.exports = router;