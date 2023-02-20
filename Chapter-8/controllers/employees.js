const data = {
    employees: require('../model/employees.json'),
    setEmployees: function (data) { this.employees = data }
};


const getAllEmpoyees = (req,res) => {
    res.json(data.employees)
}

const createNewEmployee = (req,res) => {
    const newEmployee = {
        id: data.employees[data.employees.length -1 ].id +1 || 1,
        firstname: req.body.firstname,
        lastname: req.body.lastname
    }
    if (!newEmployee.firstname || !newEmployee.firstname){
        return res.status(400).json({ 'message': 'First and last names are required'})
    }
    
    data.setEmployees([...data.employees, newEmployee])
    res.json(data.employees);
}   

const updateEmployee = (req,res) =>{
    const employe = data.employees.find(emp => emp.id=== parseInt(req.body.id))
    if(!employe){
        return res.status(400).json({'message': `Employee ID ${req.body.id} not found`})
    }
    if(req.body.firstname) employe.firstname = req.body.firstname;
    if(req.body.lastname) employe.lastname = req.body.lastname
    const filteredArray = data.employees.filter(emp => emp.id !== parseInt(req.body.id))
    const unsortedArray = [...filteredArray, employe]
    data.setEmployees(unsortedArray.sort((a,b) => a.id>b.id?1:a.id<b.id?-1:0))
    res.json(data.employees)
}

const deleteEmployee = (req,res) => {
    const employe = data.employees.find(emp => emp.id=== parseInt(req.body.id))
    if(!employe){
        return res.status(400).json({'message': `Employee ID ${req.body.id} not found`})
    }
    const filteredArray = data.employees.filter(emp => emp.id !== parseInt(req.body.id))
    data.setEmployees([...filteredArray])
    res.json(data.employees);
}

const getEmployee = (req,res) => {
    const employe = data.employees.find(emp => emp.id === parseInt(req.body.id))
   
    if(!employe){
        return res.status(400).json({'message': `Employee ID ${req.body.id} not found`})
    }
    res.json(employe)
}

module.exports = {
    getAllEmpoyees,
    createNewEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployee
};