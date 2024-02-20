// TEMPLATE LITERALES

const namePerson = 'Diego';
const sayHello = 'Hello';

// ANTES
console.log(sayHello + ' ' + namePerson);

// AHORA
console.log(`${sayHello} ${namePerson}`);

// REACT
function Box({className, ...props}){
    return <div className={`box ${className}`}/>;
}

/* <Box className='box-red'/>; */