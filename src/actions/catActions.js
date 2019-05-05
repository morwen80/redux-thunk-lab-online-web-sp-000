
export function fetchCats(){
  return (dispatch) => {
    dispatch({ type: 'LOADING_CATS' });

    return fetch('http://localhost:4000/db')
      .then(response => response.json())
      .then(catPics => dispatch({ type: 'FETCH_CATS', payload: catPics.images }));
  };

}
