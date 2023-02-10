let activeIndex = 0;
const groups = document.getElementByClassName("card-group");
const handleLoveClick = () => {
  //bump active index
  const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;
};
