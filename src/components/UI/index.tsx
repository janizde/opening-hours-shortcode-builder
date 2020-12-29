import classBound from 'class-bound-components';

export const Row = classBound('row w-100');
export const LeftCol = classBound('col-12 col-md-6');
export const RightCol = classBound('col-12 col-md-6');
export const FullCol = classBound('col-12');
export const Control = classBound.input('form-control', {
  isInvalid: 'is-invalid',
});
