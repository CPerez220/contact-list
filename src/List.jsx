const List = ({array}) => {
  return (
    <section class="section">
      {
        array.map((singleArray) => {
          return (
          <>
          <div>
          <h2 key={singleArray.id}>Name: {singleArray.name}</h2><h2> Email: {singleArray.email}</h2><h2> Phone: {singleArray.phone}</h2>
          </div>
          </>
          )
        })
      }
    </section>
  )
}

export default List;