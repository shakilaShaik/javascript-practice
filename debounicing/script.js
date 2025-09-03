const input = document.getElementById("search-box")





const handleSearch = (e) => {
  console.log("handler added", e.target.value)
  
  // console.log(this)
}



const debounce = function (fn, delay) {
  let timer;
  const context = this
  // const args = arguments
  // console.log(args)

    return function(...args) {
   clearTimeout(timer)
    // console.log("this from the outer function",this)
    timer=setTimeout(() => {
      fn.apply(context,args)
    },delay)
  }
}

const debounceHandler = debounce(handleSearch, 5000)
console.log(debounceHandler)


input.addEventListener("input",debounceHandler)