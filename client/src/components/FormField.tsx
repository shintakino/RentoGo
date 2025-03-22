import React from "react";
import {
  ControllerRenderProps,
  FieldValues,
  useFormContext,
  useFieldArray,
} from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Edit, X, Plus } from "lucide-react";
import { registerPlugin } from "filepond";
import { FilePond } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

interface FormFieldProps {
  name: string;
  label: string;
  type?:
    | "text"
    | "email"
    | "textarea"
    | "number"
    | "select"
    | "switch"
    | "password"
    | "file"
    | "multi-input";
  placeholder?: string;
  options?: { value: string; label: string }[];
  accept?: string;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  value?: string;
  disabled?: boolean;
  multiple?: boolean;
  isIcon?: boolean;
  initialValue?: string | number | boolean | string[];
}

export const CustomFormField: React.FC<FormFieldProps> = ({
  name,
  label,
  type = "text",
  placeholder,
  options,
  accept,
  className,
  inputClassName,
  labelClassName,
  disabled = false,
  multiple = false,
  isIcon = false,
  initialValue,
}) => {
  const { control } = useFormContext();

  const renderFormControl = (
    field: ControllerRenderProps<FieldValues, string>
  ) => {
    switch (type) {
      case "textarea":
        return (
          <Textarea
            placeholder={placeholder}
            {...field}
            rows={3}
            className={`min-h-[120px] rounded-xl border-gray-200 p-4 focus:border-primary-500 focus:ring-primary-500 transition-colors ${inputClassName}`}
          />
        );
      case "select":
        return (
          <Select
            value={field.value || (initialValue as string)}
            defaultValue={field.value || (initialValue as string)}
            onValueChange={field.onChange}
          >
            <SelectTrigger
              className={`w-full h-12 rounded-xl border-gray-200 bg-white hover:bg-gray-50 focus:border-primary-500 focus:ring-primary-500 transition-all ${inputClassName}`}
            >
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent className="w-full border-gray-200 shadow-lg rounded-xl overflow-hidden">
              {options?.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  className="cursor-pointer py-3 px-4 hover:bg-gray-50 focus:bg-gray-50 transition-colors"
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      case "switch":
        return (
          <div className="flex items-center space-x-3">
            <Switch
              checked={field.value}
              onCheckedChange={field.onChange}
              id={name}
              className={`data-[state=checked]:bg-primary-600 ${inputClassName}`}
            />
            <FormLabel htmlFor={name} className={`text-gray-700 cursor-pointer ${labelClassName}`}>
              {label}
            </FormLabel>
          </div>
        );
      case "file":
        return (
          <FilePond
            className={`bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 ${inputClassName}`}
            onupdatefiles={(fileItems) => {
              const files = fileItems.map((fileItem) => fileItem.file);
              field.onChange(files);
            }}
            allowMultiple={true}
            labelIdle={`
              <div class="flex flex-col items-center p-6">
                <svg class="w-12 h-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span class="text-gray-600">Drag & Drop your images or</span>
                <span class="text-primary-600 font-medium hover:text-primary-700 cursor-pointer">Browse</span>
              </div>
            `}
            credits={false}
          />
        );
      case "multi-input":
        return (
          <MultiInputField
            name={name}
            control={control}
            placeholder={placeholder}
            inputClassName={inputClassName}
          />
        );
      default:
        return (
          <Input
            type={type}
            placeholder={placeholder}
            {...field}
            className={`h-12 rounded-xl border-gray-200 focus:border-primary-500 focus:ring-primary-500 transition-colors ${inputClassName}`}
            disabled={disabled}
          />
        );
    }
  };

  return (
    <FormField
      control={control}
      name={name}
      defaultValue={initialValue}
      render={({ field }) => (
        <FormItem className={`space-y-2 ${className}`}>
          {type !== "switch" && (
            <div className="flex justify-between items-center">
              <FormLabel className={`text-sm font-medium text-gray-700 ${labelClassName}`}>
                {label}
              </FormLabel>
              {!disabled && isIcon && type !== "file" && type !== "multi-input" && (
                <Edit className="w-4 h-4 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer" />
              )}
            </div>
          )}
          <FormControl>
            {renderFormControl({
              ...field,
              value: field.value !== undefined ? field.value : initialValue,
            })}
          </FormControl>
          <FormMessage className="text-red-500 text-sm" />
        </FormItem>
      )}
    />
  );
};

interface MultiInputFieldProps {
  name: string;
  control: any;
  placeholder?: string;
  inputClassName?: string;
}

const MultiInputField: React.FC<MultiInputFieldProps> = ({
  name,
  control,
  placeholder,
  inputClassName,
}) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  return (
    <div className="space-y-3">
      {fields.map((field, index) => (
        <div key={field.id} className="flex items-center gap-2 group">
          <FormField
            control={control}
            name={`${name}.${index}`}
            render={({ field }) => (
              <FormControl>
                <Input
                  {...field}
                  placeholder={placeholder}
                  className={`h-12 rounded-xl bg-gray-50 border-gray-200 focus:border-primary-500 focus:ring-primary-500 transition-colors ${inputClassName}`}
                />
              </FormControl>
            )}
          />
          <Button
            type="button"
            onClick={() => remove(index)}
            variant="ghost"
            size="icon"
            className="opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-50 hover:text-red-500"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      ))}
      <Button
        type="button"
        onClick={() => append("")}
        variant="outline"
        size="sm"
        className="w-full h-12 rounded-xl border-dashed border-2 text-gray-600 hover:border-primary-500 hover:text-primary-600 hover:bg-primary-50 transition-all"
      >
        <Plus className="w-4 h-4 mr-2" />
        Add Item
      </Button>
    </div>
  );
};
