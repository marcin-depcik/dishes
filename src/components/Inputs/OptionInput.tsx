import { RootState } from '@/redux/store'
import { useSelector } from 'react-redux'
import { NumberInput } from './NumberInput'
import { Field } from 'redux-form'
import { SliderInput } from '@/components/Inputs/SliderInput'

export const OptionInput = () => {
  const { type } = useSelector((state: RootState) => state.formReducer)

  return (
    <>
      {type === 'pizza' && (
        <>
          <Field
            name="no_of_slices"
            component={NumberInput}
            label="*Set number of slices"
          />
          <Field
            name="diameter"
            component={NumberInput}
            label="*Set diameter of pizza"
            min={0.1}
            step={0.1}
            float
          />
        </>
      )}
      {type === 'soup' && (
        <Field
          name="spiciness_scale"
          component={SliderInput}
          label="*Set spiciness of soup"
        />
      )}
      {type === 'sandwich' && (
        <Field
          name="slices_of_bread"
          component={NumberInput}
          label="*Set number of bread slices"
        />
      )}
    </>
  )
}
