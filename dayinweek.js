const printMenu = day => {
    switch (day) {
        case '1':
            console.log('Monday Menu: Chana Masala');
            break;
        case '2':
            console.log('Tuesday Menu: Chicken Biryani');
            break;
        case '3':
            console.log('Wednesday Menu: Palak Paneer');
            break;
        case '4':
            console.log('Thursday Menu: Butter Chicken');
            break;
        case '5':
            console.log('Friday Menu: Masala Dosa');
            break;
        case '6':
            console.log('Saturday Menu: Tandoori Mixed Grill');
            break;
        case '7':
            console.log('Sunday Menu: Rogan Josh');
            break;
        default:
            console.log('Invalid day');
    }
};
printMenu('1');
