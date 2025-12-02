function addCourier() { 
    const id = document.getElementById('courier-id').value; 
    const name = document.getElementById('courier-name').value; 

    const courier = { 
        id: id, 
        name: name, 
        status: 'Pending' 
    }; 

    let couriers = JSON.parse(localStorage.getItem('couriers')) || []; 
    couriers.push(courier); 
    localStorage.setItem('couriers', JSON.stringify(couriers)); 

    const courierList = document.getElementById('courier-list'); 
    const li = document.createElement('li'); 
    li.textContent = `${id} - ${name} - ${courier.status}`; 
    courierList.appendChild(li); 

    document.getElementById('courier-id').value = ''; 
    document.getElementById('courier-name').value = ''; 
}

function deleteCourier() { 
    const courierBox = document.querySelector('.courier'); 
    courierBox.remove(); 

    const couriers = JSON.parse(localStorage.getItem('couriers')) || []; 
    const index = couriers.findIndex(courier => courier.id === 'C001'); 
    if (index !== -1) { 
        couriers.splice(index, 1); 
        localStorage.setItem('couriers', JSON.stringify(couriers)); 
    } 
}

window.onload = function() { 
    const couriers = JSON.parse(localStorage.getItem('couriers')) || []; 
    const courierList = document.getElementById('courier-list'); 
    couriers.forEach(courier => { 
        const li = document.createElement('li'); 
        li.textContent = `${courier.id} - ${courier.name} - ${courier.status}`; 
        courierList.appendChild(li); 
    }); 
};
