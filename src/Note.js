import dateFormat from "dateformat";

export default function Note({ data, handlerDelete, handlerEdit }) {
  return data.sort((a, b) => new Date(b.date) - new Date(a.date)).map((el, index) => {
    return (
      <div key={index} className='note'>
        <div className='note_date'>{dateFormat(el.date, 'dd.mm.yy')}</div>
        <div className='note_distance'>{el.distance}</div>
        <div className='note_actions'>
          <div 
            className='edit'
            onClick={() => handlerEdit(dateFormat(el.date, 'dd.mm.yy'), el.distance)}
          ></div>
          <div 
            className='delete'
            onClick={() => handlerDelete(dateFormat(el.date, 'dd.mm.yy'))}
          ></div>
        </div>
      </div>
    );
  });
}
