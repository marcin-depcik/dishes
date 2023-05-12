import axios from 'axios'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { TextInput } from '@/components/Inputs/TextInput'
import { TimeInput } from '@/components/Inputs/TimeInput'
import { SelectInput } from '@/components/Inputs/SelectInput'
import { OptionInput } from '@/components/Inputs/OptionInput'
import { validate } from '@/utils/validate'
import FormCardImage from '@/assets/images/form-card-image.svg'
import {
  Field,
  InjectedFormProps,
  SubmissionError,
  reduxForm,
} from 'redux-form'

import '@/styles/components/FormCard.scss'

export interface FormValues {
  name: string
  preparation_time: string
  type: string
  no_of_slices: number
  diameter: number
  slices_of_bread: number
  spiciness_scale: number
}

const API_URL = 'https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/'

const FormCard = ({
  handleSubmit,
  submitSucceeded,
}: InjectedFormProps<FormValues, unknown, string>) => {
  const inputs = useSelector((state: RootState) => state.formReducer)

  const submit = async () => {
    try {
      await axios.post(API_URL, inputs, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
    } catch (error: any) {
      return Promise.reject(new SubmissionError(error.response.data))
    }
  }

  return (
    <form
      className={`form-card ${submitSucceeded ? 'succeed-card' : ''}`}
      onSubmit={handleSubmit(submit)}
    >
      <div className="form-card_main">
        {submitSucceeded ? (
          <>
            <h1>Submit succeeded!</h1>
            <h3>Thank you for your time.</h3>
            <img src={FormCardImage} alt="Woman with form card" />
          </>
        ) : (
          <>
            <h2>Select your dish!</h2>
            <p>Please fill all *required fields and submit the form.</p>
            <div className="form-card_inputs">
              <Field
                name="name"
                component={TextInput}
                placeholder="Type meal name..."
                label="*Enter name of the dish"
              />
              <Field
                name="preparation_time"
                component={TimeInput}
                label="*Enter preparation time"
              />
              <Field
                name="type"
                component={SelectInput}
                placeholder="Select type"
                label="*Select type of the dish"
              />
              <OptionInput />
            </div>
          </>
        )}
      </div>
      {!submitSucceeded && (
        <input className="form-card_btn" type="submit" value="Submit" />
      )}
    </form>
  )
}

export const ReduxFormCard = reduxForm({
  form: 'formCard',
  validate,
})(FormCard)
