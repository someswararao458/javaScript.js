let bookName = prompt('Enter Book Name:');
if(bookName != '' && typeof bookName == 'string'){
    let bookCount = +prompt(`Enter no of ${bookName} books do you want:`)
        if(bookCount != '' && typeof bookCount == 'number'){
            console.log(`your purchase order for book
            Book Name: ${bookName}
            Book Name: ${bookCount}`);
    }
    else{
        console.log('your order cannot be place book order');

    }
}
else{
    console.log('Book Name Cannot be Empty or can only be');
}