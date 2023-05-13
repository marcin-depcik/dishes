import { RootState } from '@/redux/store'
import { useSelector } from 'react-redux'
import { NumberInput } from './NumberInput'
import { Field } from 'redux-form'
import { SliderInput } from '@/components/Inputs/SliderInput'
import { INPUTS } from '@/enums/formInputs'

export const OptionInput = () => {
  const { type } = useSelector((state: RootState) => state.formReducer)

  return (
    <>
      {type === 'pizza' && (
        <>
          <Field
            name={INPUTS.NO_OF_SLICES}
            component={NumberInput}
            label="*Set number of slices"
          />
          <Field
            name={INPUTS.DIAMETER}
            component={NumberInput}
            label="*Set pizza size (cm)"
            min={0.1}
            step={0.1}
            float
          />
        </>
      )}
      {type === 'soup' && (
        <Field
          name={INPUTS.SPICINESS_SCALE}
          component={SliderInput}
          label="*Set spiciness of soup"
        />
      )}
      {type === 'sandwich' && (
        <Field
          name={INPUTS.SLICES_OF_BREAD}
          component={NumberInput}
          label="*Set number of bread slices"
        />
      )}
    </>
  )
}
