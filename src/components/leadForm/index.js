import React, { useState } from 'react';

import Input from '../input';

import * as Styles from './styles';

export default function LeadForm() {
  const [state, setstate] = useState('');

  const handleChange = e => {};
  return (
    <Styles.FormWrapper>
      <Styles.Title>STUDENT ENQUIRY FORM</Styles.Title>
      <Input
        placeholder={'Name'}
        value={''}
        onChange={handleChange}
        width={'240px'}
        height={'35px'}
        margin={'20px auto'}
        errorLabel={''}
      />
      <Input
        placeholder={'Mobile'}
        value={''}
        onChange={handleChange}
        width={'240px'}
        height={'35px'}
        margin={'20px auto'}
        errorLabel={''}
      />
      <Input
        placeholder={'Email'}
        value={''}
        onChange={handleChange}
        width={'240px'}
        height={'35px'}
        margin={'20px auto'}
        errorLabel={''}
      />
      <Input
        placeholder={'Select Course'}
        inputType="select"
        value={''}
        onChange={handleChange}
        width={'240px'}
        height={'35px'}
        margin={'20px auto'}
        selectOptions={[
          {
            value: 'Engineering',
            displayName: 'Engineering'
          }
        ]}
        errorLabel={''}
      />
      <Input
        placeholder={'Select State'}
        inputType="select"
        value={''}
        onChange={handleChange}
        width={'240px'}
        height={'35px'}
        margin={'20px auto'}
        selectOptions={[
          {
            value: 'TN',
            displayName: 'TN'
          }
        ]}
        errorLabel={''}
      />
      <Input
        placeholder={'Select City'}
        inputType="select"
        value={''}
        onChange={handleChange}
        width={'240px'}
        height={'35px'}
        margin={'20px auto'}
        selectOptions={[
          {
            value: 'Coimbatore',
            displayName: 'Coimbatore'
          }
        ]}
        errorLabel={''}
      />
      <Styles.TextArea value="" placeholder={'Comments (Max 500)'} />
      <Styles.CTA>Submit</Styles.CTA>
    </Styles.FormWrapper>
  );
}
