import dateFormat from "dateformat";

const data = {
  elements: [{date: dateFormat('10.12.23'), distance: 2.2}],

  add(item) {
    const pattern = /(\d{2})\.(\d{2})\.(\d{2})/;
    const date =  dateFormat(item.date.replace(pattern,'$2.$1.$3'))
    const distance = Number(item.distance)

    if (this.elements.findIndex((el) => el.date === date) >= 0) {
      this.elements[this.elements.findIndex((el) => el.date === date)].distance += distance;
    } else {
      this.elements.push({
        date: date,
        distance: distance,
      });
    }
  },

  remove(date) {
    const index = this.elements.findIndex((el) => dateFormat(el.date, 'dd.mm.yy') === date);
    this.elements.splice(index, 1);
    console.log(this.elements)
  }
}

export default data;
