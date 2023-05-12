import { FormValues } from '@/components/FormCard/FormCard'

export const validate = (values: FormValues) => {
  const msg = 'This field is required!'
  const errors = {
    name: '',
    preparation_time: '',
    type: '',
    no_of_slices: '',
    diameter: '',
    slices_of_bread: '',
  }

  if (!values.name || !values.name.match('^[a-zA-Z0-9\\s]+$')) {
    errors.name = msg
  }
  if (!values.preparation_time || values.preparation_time === '00:00:00') {
    errors.preparation_time = msg
  }
  if (!values.type) {
    errors.type = msg
  }
  if (!values.no_of_slices) {
    errors.no_of_slices = msg
  }
  if (!values.diameter) {
    errors.diameter = msg
  }
  if (!values.slices_of_bread) {
    errors.slices_of_bread = msg
  }

  return errors
}
