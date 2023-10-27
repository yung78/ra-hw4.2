import { useState } from "react";
import Note from './Note';
import data from './data';

export default function StepCounter() {

  const [form, setForm] = useState({
    date: '',
    distance: '',
  });
  const [elements, setElements] = useState(data.elements)
  
  
  const handlerSubmit = (e) => {
    e.preventDefault();
    if (!form.date || !form.distance) {
      return
    }
    data.add(form);
    setElements(data.elements)
    
    setForm({
      date: '',
      distance: '',
    })
  }

  const handlerChange = ({target}) => {
    const { className, value } = target;
    setForm((prevState) => {
      return {
        ...prevState,
        [className]: value
      }
    });
  }

  const handlerDelete = (date) => {
    data.remove(date);
    setElements(data.elements);
    // если убрать выражение ниже - компоненты не обновляются?
    setForm({
      date: '',
      distance: '',
    })
  }

  const handlerEdit = (date, distance) => {
    handlerDelete(date);
    
    setForm({
      date: date,
      distance: distance,
    });
  }

  return (
    <div className='step_counter'>
      <form 
        className='form'
        onSubmit={handlerSubmit}>
        <div>
          <label>Date (dd.mm.yy)</label>
          <input 
            className='date'
            onChange={handlerChange}
            value={form.date}
            ></input>
        </div>
        <div>
          <label>Km passed</label>
          <input 
            className='distance'
            onChange={handlerChange}
            value={form.distance}
            ></input>
        </div>
        <button className='btn' type='submit'>ОК</button>
      </form>
      <div className='history'>
        <div className='history-header'>
          <div className='date-header'>Date (dd.mm.yy)</div>
          <div className='distance-header'>Km passed</div>
          <div className='action-header'>Action</div>
        </div>
        <div className='history-journal'>
          <Note 
            data={elements}
            handlerDelete={handlerDelete}
            handlerEdit={handlerEdit} />
        </div>
      </div>
    </div>
  )
}
