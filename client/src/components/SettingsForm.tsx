import { SettingsFormData, settingsSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form } from "../components/ui/form";
import { CustomFormField } from "./FormField";
import { Button } from "../components/ui/button";
import { Settings2, Save, X } from "lucide-react";

const SettingsForm = ({
  initialData,
  onSubmit,
  userType,
}: SettingsFormProps) => {
  const [editMode, setEditMode] = useState(false);
  const form = useForm<SettingsFormData>({
    resolver: zodResolver(settingsSchema),
    defaultValues: initialData,
  });

  const toggleEditMode = () => {
    setEditMode(!editMode);
    if (editMode) {
      form.reset(initialData);
    }
  };

  const handleSubmit = async (data: SettingsFormData) => {
    await onSubmit(data);
    setEditMode(false);
  };

  return (
    <div className="max-w-3xl mx-auto pt-8 pb-5 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Settings2 className="w-6 h-6 text-primary-600" />
          <h1 className="text-2xl font-display font-bold text-gray-900">
          {`${userType.charAt(0).toUpperCase() + userType.slice(1)} Settings`}
        </h1>
        </div>
        <p className="text-base text-gray-600">
          Manage your account preferences and personal information
        </p>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
        {/* Form Header */}
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-medium text-gray-700">Personal Information</h2>
            <div className="relative">
              <div className={`absolute inset-0 bg-primary-100 rounded-full transition-transform duration-300 ${editMode ? 'scale-100' : 'scale-0'}`} />
              <Button
                type="button"
                onClick={toggleEditMode}
                variant="ghost"
                size="sm"
                className={`relative transition-colors ${
                  editMode 
                    ? 'text-primary-700 hover:text-primary-800' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                {editMode ? (
                  <X className="w-4 h-4 mr-2" />
                ) : (
                  <Settings2 className="w-4 h-4 mr-2" />
                )}
                {editMode ? 'Cancel Editing' : 'Edit Information'}
              </Button>
            </div>
          </div>
        </div>

        {/* Form Content */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="p-6">
            <div className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <CustomFormField
                  name="name"
                  label="Full Name"
                  disabled={!editMode}
                  className="transition-opacity"
                  labelClassName="text-gray-700"
                />
            <CustomFormField
              name="email"
                  label="Email Address"
              type="email"
              disabled={!editMode}
                  className="transition-opacity"
                  labelClassName="text-gray-700"
            />
              </div>
            <CustomFormField
              name="phoneNumber"
              label="Phone Number"
              disabled={!editMode}
                className="transition-opacity"
                labelClassName="text-gray-700"
            />
            </div>

            {/* Form Actions */}
            {editMode && (
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex justify-end gap-3">
              <Button
                type="button"
                onClick={toggleEditMode}
                    variant="outline"
                    className="border-gray-200 text-gray-700 hover:bg-gray-50"
              >
                    <X className="w-4 h-4 mr-2" />
                    Cancel
              </Button>
                <Button
                  type="submit"
                    className="bg-primary-600 text-white hover:bg-primary-700 transition-colors"
                >
                    <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
                </div>
              </div>
              )}
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SettingsForm;
