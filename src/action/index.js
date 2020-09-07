export function addData(data){
    return {
      type: 'ADD_POST',
      data
    }
}

export function getEditData(id){
    return {
      type: 'EDIT_POST',
      id
    }
}

export function editData(id,data){
    return {
      type: 'UPDATE',
      id,
      data
    }
}

export function getData(object){
    return {
      type: 'UPDATE',
      object
    }
}

export function deleteDate(id){
    return {
      type: 'DELETE_POST',
      id
    }
}
