import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { useLanguage } from '@/contexts/LanguageContext';
import { QuestionType } from './types';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FormItem, FormLabel, FormControl, FormMessage, FormField } from '@/components/ui/form';

interface QuestionProps {
  question: QuestionType;
  number: number;
}

export const Question: React.FC<QuestionProps> = ({ question, number }) => {
  const { language } = useLanguage();
  const { control, formState: { errors } } = useFormContext();
  
  console.log('Question rendered', { id: question.id, number, type: question.type });
  
  const questionText = language === 'ja' ? question.textJa : question.textEn;
  
  const renderQuestionInput = () => {
    switch (question.type) {
      case 'likert':
        return (
          <Controller
            name={question.id}
            control={control}
            rules={{ required: question.required }}
            render={({ field }) => (
              <RadioGroup 
                defaultValue={question.defaultValue?.toString()} 
                className="flex justify-between mt-3"
                onValueChange={field.onChange}
                value={field.value}
                name={field.name}
              >
                {[1, 2, 3, 4, 5].map((value) => (
                  <div key={value} className="flex flex-col items-center">
                    <RadioGroupItem value={value.toString()} id={`${question.id}-${value}`} />
                    <FormLabel htmlFor={`${question.id}-${value}`} className="mt-1 text-xs">
                      {value === 1 ? '全く同意しない' : 
                       value === 2 ? '同意しない' : 
                       value === 3 ? '中立' : 
                       value === 4 ? '同意する' : 
                       '強く同意する'}
                    </FormLabel>
                  </div>
                ))}
              </RadioGroup>
            )}
          />
        );
        
      case 'multiple-choice':
        return (
          <Controller
            name={question.id}
            control={control}
            rules={{ required: question.required }}
            render={({ field }) => (
              <RadioGroup 
                defaultValue={question.defaultValue?.toString()} 
                className="space-y-3 mt-3"
                onValueChange={field.onChange}
                value={field.value}
                name={field.name}
              >
                {question.options?.map((option, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <RadioGroupItem value={option.value} id={`${question.id}-${option.value}`} />
                    <FormLabel htmlFor={`${question.id}-${option.value}`}>
                      {language === 'ja' ? option.labelJa : option.labelEn}
                    </FormLabel>
                  </div>
                ))}
              </RadioGroup>
            )}
          />
        );
        
      case 'checkbox':
        return (
          <div className="space-y-3 mt-3">
            {question.options?.map((option, i) => (
              <div key={i} className="flex items-center space-x-2">
                <Controller
                  name={`${question.id}.${option.value}`}
                  control={control}
                  render={({ field }) => (
                    <Checkbox 
                      id={`${question.id}-${option.value}`} 
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  )}
                />
                <FormLabel htmlFor={`${question.id}-${option.value}`}>
                  {language === 'ja' ? option.labelJa : option.labelEn}
                </FormLabel>
              </div>
            ))}
          </div>
        );
        
      case 'slider':
        return (
          <div className="mt-6 px-2">
            <Controller
              name={question.id}
              control={control}
              rules={{ required: question.required }}
              render={({ field }) => (
                <Slider 
                  defaultValue={[question.defaultValue || 50]} 
                  max={100} 
                  step={1}
                  onValueChange={(value) => field.onChange(value[0])}
                  value={field.value ? [field.value] : [question.defaultValue || 50]}
                  name={field.name}
                />
              )}
            />
            <div className="flex justify-between mt-2 text-xs text-gray-500">
              <span>{language === 'ja' ? question.minLabelJa : question.minLabelEn}</span>
              <span>{language === 'ja' ? question.maxLabelJa : question.maxLabelEn}</span>
            </div>
          </div>
        );
        
      case 'text':
        return (
          <Controller
            name={question.id}
            control={control}
            rules={{ required: question.required }}
            render={({ field }) => (
              <Input 
                className="mt-3" 
                placeholder={language === 'ja' ? question.placeholderJa : question.placeholderEn}
                {...field}
              />
            )}
          />
        );
        
      case 'textarea':
        return (
          <Controller
            name={question.id}
            control={control}
            rules={{ required: question.required }}
            render={({ field }) => (
              <Textarea 
                className="mt-3" 
                placeholder={language === 'ja' ? question.placeholderJa : question.placeholderEn}
                {...field}
              />
            )}
          />
        );
        
      default:
        return null;
    }
  };
  
  return (
    <FormItem className="space-y-2">
      <FormLabel className="text-base font-medium flex">
        <span className="mr-2 text-enabler-600 font-bold">{number}.</span>
        {questionText}
        {question.required && <span className="text-red-500 ml-1">*</span>}
      </FormLabel>
      <FormControl>{renderQuestionInput()}</FormControl>
      {errors[question.id] && (
        <FormMessage>{errors[question.id]?.message}</FormMessage>
      )}
    </FormItem>
  );
};
