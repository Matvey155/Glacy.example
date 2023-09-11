const rangeSliderElements = document.querySelectorAll('.range-slider')

rangeSliderElements.forEach((rangeSliderElement) => {
  noUiSlider.create(rangeSliderElement, {
    start: [20, 80],
    connect: true,
    range: {
      'min': 0,
      'max': 100,
    },
  })
})