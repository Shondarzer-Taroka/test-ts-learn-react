import React, { useState, useRef } from 'react';

type UserInfo = {
  name: string;
  email: string;
  number: string;
  image?: File | null;
};

type FormErrors = {
  name?: string;
  email?: string;
  number?: string;
  image?: string;
};

const UserFormAvatar = () => {
  const [user, setUser] = useState<UserInfo>({
    name: '',
    email: '',
    number: '',
    image: null
  });
  
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      // Validate file type and size
      if (!file.type.match('image.*')) {
        setErrors(prev => ({ ...prev, image: 'Please select an image file' }));
        return;
      }
      
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        setErrors(prev => ({ ...prev, image: 'File size must be less than 5MB' }));
        return;
      }
      
      setUser(prev => ({ ...prev, image: file }));
      setErrors(prev => ({ ...prev, image: undefined }));
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setUser(prev => ({ ...prev, image: null }));
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!user.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!user.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!user.number.trim()) {
      newErrors.number = 'Phone number is required';
    } else if (!/^[\d\s()+.-]{10,}$/.test(user.number)) {
      newErrors.number = 'Please enter a valid phone number';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call with FormData
      const formData = new FormData();
      formData.append('name', user.name);
      formData.append('email', user.email);
      formData.append('number', user.number);
      if (user.image) {
        formData.append('image', user.image);
      }
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted successfully:', Object.fromEntries(formData));
      setSubmitSuccess(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setUser({ name: '', email: '', number: '', image: null });
        setPreviewUrl(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
        setSubmitSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            User Information
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Please fill in your details
          </p>
        </div>
        
        {submitSuccess && (
          <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg">
            Form submitted successfully!
          </div>
        )}
        
        <form className="mt-8 space-y-6 text-left" onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* Avatar Image Upload Section */}
            <div className="flex flex-col items-center">
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Profile Picture
              </label>
              
              <div className="relative">
                {previewUrl ? (
                  <>
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <img 
                        src={previewUrl} 
                        alt="Profile preview" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={handleRemoveImage}
                      className="absolute -top-2 -right-2 bg-red-500 rounded-full p-1 shadow-md hover:bg-red-600 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </>
                ) : (
                  <label 
                    htmlFor="avatar-upload"
                    className="cursor-pointer w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center shadow-inner hover:bg-gray-300 transition-colors"
                  >
                    <div className="text-center">
                      <svg className="w-12 h-12 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                      </svg>
                      <span className="text-xs text-gray-500 mt-2 block">Upload Photo</span>
                    </div>
                  </label>
                )}
                <input
                  id="avatar-upload"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageChange}
                  ref={fileInputRef}
                />
              </div>
              
              <p className="mt-2 text-xs text-gray-500 text-center">
                PNG, JPG (MAX. 5MB)
              </p>
              {errors.image && <p className="mt-1 text-sm text-red-600 text-center">{errors.image}</p>}
            </div>

            {/* Form Fields */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                className={`appearance-none relative block w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                type="text"
                name="name"
                id="name"
                placeholder="John Doe"
                value={user.name}
                onChange={handleChange}
              />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                className={`appearance-none relative block w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                type="email"
                name="email"
                id="email"
                placeholder="your@email.com"
                value={user.email}
                onChange={handleChange}
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                className={`appearance-none relative block w-full px-4 py-3 border ${errors.number ? 'border-red-500' : 'border-gray-300'} placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                type="tel"
                name="number"
                id="number"
                placeholder="+1 (123) 456-7890"
                value={user.number}
                onChange={handleChange}
              />
              {errors.number && <p className="mt-1 text-sm text-red-600">{errors.number}</p>}
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white ${isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserFormAvatar;