//how to print the date
//date objetc
let today = new Date();
//today is the date ref ( it will hold the date obect from the the memory)
// new Date(): the date object
export let date= () => {

    console.log(today.toLocaleDateString());
   console.log(today.getDate());
   console.log(today.getMinutes());
   console.log(today.getTime());
}