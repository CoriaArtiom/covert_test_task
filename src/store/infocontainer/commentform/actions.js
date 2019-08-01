export const COMMENTFORM_CHANGE_TITLE = 'COMMENTFORM_CHANGE_TITLE';
export const COMMENTFORM_CHANGE_TEXT = 'COMMENTFORM_CHANGE_TEXT';
export const COMMENTFORM_CHANGE_PHONE = 'COMMENTFORM_CHANGE_PHONE';

export const SET_TITLE_ERROR = 'SET_TITLE_ERROR';
export const SET_TEXT_ERROR = 'SET_TEXT_ERROR';
export const SET_PHONE_ERROR = 'SET_PHONE_ERROR';

export const setTitle = title => ({
	type: COMMENTFORM_CHANGE_TITLE,
	payload: title
});

export const setText = text => ({
	type: COMMENTFORM_CHANGE_TEXT,
	payload: text
});

export const setPhone = phone => ({
	type: COMMENTFORM_CHANGE_PHONE,
	payload: phone
});

export const setTitleError = titleError => ({
	type: SET_TITLE_ERROR,
	payload: titleError
});

export const setTextError = textError => ({
	type: SET_TEXT_ERROR,
	payload: textError
});

export const setPhoneError = phoneError => ({
	type: SET_PHONE_ERROR,
	payload: phoneError
});

