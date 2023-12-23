import { DetailedHTMLProps, FocusEvent, HTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

export type FieldInputProps = {
  autoComplete?: string;
  name?: string;
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: (e: FocusEvent<Element, Element>) => void;
  isRequired?: boolean;
  isInvalid?: boolean;
  error?: string;
  labelShow?: boolean;
  labelText?: string;
  placeholder?: string;
  helper?: string;
  type?:
    | 'email'
    | 'password'
    | 'search'
    | 'text'
    | 'url'
    | 'tel'
    | (string & {});
  disabled?: boolean;
} & DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement>;
