let types = ['Acoustic guitar', 'Electric guitar', 'Bass guitar']
let brands = ['Stagg', 'Yamaha', 'Cort']

let products = [
    {
        id: 1,
        type: types[1],
        brand: brands[0],
        name: 'SES-30 IBM',
        price: 199,
        description: brands[0]+' SES-30 – six-string vintage electric guitar "S" series in a "stratocaster" body in a beautiful Ice blue metallic finish, has three single-coil pickups, one volume control knob and two tone control knobs.',
        specifications: {
            body: 'Alder',
            neck: 'Maple',
            frets: '22',
            pickups: 'SSS',
            color: 'Blue'
        }
    },
    {
        id: 2,
        type: types[1],
        brand: brands[1],
        name: 'PACIFICA012 BL',
        price: 359,
        description: brands[1]+' PACIFICA012 BL – six-string vintage electric guitar "S" series in a "stratocaster" body in a beautiful Ice blue metallic finish, has three single-coil pickups, one volume control knob and two tone control knobs.',
        specifications: {
            body: 'Alder',
            neck: 'Maple',
            frets: '22',
            pickups: 'SSS',
            color: 'Blue'
        }
    },
    {
        id: 3,
        type: types[0],
        brand: brands[2],
        name: 'AD810 OP',
        price: 299,
        description: brands[2]+' AD810 OP – six-string vintage electric guitar "S" series in a "stratocaster" body in a beautiful Ice blue metallic finish, has three single-coil pickups, one volume control knob and two tone control knobs.',
        specifications: {
            body: 'Alder',
            neck: 'Maple',
            frets: '22',
            pickups: 'SSS',
            color: 'Blue'
        }
    },
    {
        id: 4,
        type: types[1],
        brand: brands[0],
        name: 'SEL-STD BLK',
        price: 439,
        description: brands[0]+' SEL-STD BLK – six-string vintage electric guitar "S" series in a "stratocaster" body in a beautiful Ice blue metallic finish, has three single-coil pickups, one volume control knob and two tone control knobs.',
        specifications: {
            body: 'Alder',
            neck: 'Maple',
            frets: '22',
            pickups: 'SSS',
            color: 'Blue'
        }
    },
    {
        id: 5,
        type: types[2],
        brand: brands[0],
        name: 'SBJ-30 STF RED',
        price: 230,
        description: brands[0]+' SBJ-30 STF RED – six-string vintage electric guitar "S" series in a "stratocaster" body in a beautiful Ice blue metallic finish, has three single-coil pickups, one volume control knob and two tone control knobs.',
        specifications: {
            body: 'Alder',
            neck: 'Maple',
            frets: '22',
            pickups: 'SSS',
            color: 'Blue'
        }
    },
    {
        id: 6,
        type: types[0],
        brand: brands[1],
        name: 'FG840 NT',
        price: 710,
        description: brands[1]+' FG840 NT – six-string vintage electric guitar "S" series in a "stratocaster" body in a beautiful Ice blue metallic finish, has three single-coil pickups, one volume control knob and two tone control knobs.',
        specifications: {
            body: 'Alder',
            neck: 'Maple',
            frets: '22',
            pickups: 'SSS',
            color: 'Blue'
        }
    },
    {
        id: 7,
        type: types[0],
        brand: brands[2],
        name: 'AD810 OP',
        price: 399,
        description: brands[2]+' AD810 OP – six-string vintage electric guitar "S" series in a "stratocaster" body in a beautiful Ice blue metallic finish, has three single-coil pickups, one volume control knob and two tone control knobs.',
        specifications: {
            body: 'Alder',
            neck: 'Maple',
            frets: '22',
            pickups: 'SSS',
            color: 'Blue'
        }
    },
    {
        id: 8,
        type: types[2],
        brand: brands[1],
        name: 'C410M WH',
        price: 459,
        description: brands[1]+' C410M WH – six-string vintage electric guitar "S" series in a "stratocaster" body in a beautiful Ice blue metallic finish, has three single-coil pickups, one volume control knob and two tone control knobs.',
        specifications: {
            body: 'Alder',
            neck: 'Maple',
            frets: '22',
            pickups: 'SSS',
            color: 'Blue'
        }
    }
]

export default class ProductService{
    static getAllProducts(){
        return products;
    }

    static getProductById(id){
        let res;
        products.forEach((el)=>{
            if(el.id===id) res=el;
        })
        return res;
    }
}