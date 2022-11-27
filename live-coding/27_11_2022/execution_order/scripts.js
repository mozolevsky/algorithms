
// D:/github/algorithms/live-coding/27_11_2022/execution_order/index.html

const outer = document.querySelector('.outer');
const inner = document.querySelector('.inner');

new MutationObserver(function () {
  console.log('mutate'); // microtask
}).observe(outer, {
  attributes: true,
});

function onClick() {
  console.log('click'); // syncronous task

  setTimeout(function () {
    console.log('timeout'); // macrotask
  }, 0);

  new Promise((res, rej) => {
    console.log('promissssss')

    res()
  }).then(() => {
    console.log('promise')
  })


  outer.setAttribute('data-random', Math.random());
}

inner.addEventListener('click', onClick);
outer.addEventListener('click', onClick);

/**
 * Order of logs if click inner
 */

// console output
// click (inner)
// promissssss (inner)
// promise (inner)
// mutate (inner)
// click (outer)
// promissssss (outer)
// promise (outer)
// mutate (outer)
// timeout (inner);
// timeout (outer)




/**
 * Order of logs if click outer
 */
