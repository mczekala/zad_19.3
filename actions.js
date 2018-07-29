const REMOVE_COMMENT = 'REMOVE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';
const ADD_COMMENT = 'ADD_COMMENT';

function addComment(text) {
  return {
    type: ADD_COMMENT,
    text,
    id: uui.v4()
  }
}

function editComment(text, id) {
  return {
    type: EDIT_COMMENT,
    text,
    id
  }
}

function deleteComment(id) {
  return {
    type: REMOVE_COMMENT,
    id
  }
}

function plusComment(id) {
  return {
    type: THUMB_UP_COMMENT,
    id
  }
}

function minusComment(id) {
  return {
    type: THUMB_DOWN_COMMENT,
    id
  }
}