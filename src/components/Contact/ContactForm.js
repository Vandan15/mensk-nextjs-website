"use client";

import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

const ContactForm = ({
  inputs = [],
  formClassName = "comment-one__form",
  inputClassName = "comment-form__input-box",
  messageClassName = "text-message-box",
  btnBoxClassName = "btn-box",
  btnClassName = "comment-form__btn",
  btnText = "Send a message",
}) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const validate = (data) => {
    const requiredFields = inputs.filter((input) => input.required);
    for (const field of requiredFields) {
      if (!data[field.name] || data[field.name].trim() === "") {
        return false;
      }
    }

    // Email validation
    if (data.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        return false;
      }
    }

    // Phone validation - 10 digits
    if (data.phone) {
      const phoneRegex = /^\d{10}$/;
      const cleanPhone = data.phone.replace(/\D/g, ""); // Remove non-digits
      if (!phoneRegex.test(cleanPhone)) {
        return false;
      }
    }

    return true;
  };

  const onSubmit = async (data) => {
    if (!validate(data)) return;

    setLoading(true);
    setSuccess(false);
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzjV8mdl6nF96BZNjpLQs4X9ajgJH88CUfyvnmvJQsdt35wPd_wPoOTFkufDlmIyUgk/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "text/plain",
          },
          body: JSON.stringify({ ...data }),
        }
      );

      if (response.ok) {
        setSuccess(true);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`${formClassName} contact-form-validated`}
      >
        <Row>
          {inputs.map(({ name, placeholder, type, required }) => {
            // Define validation rules based on field type
            const getValidationRules = () => {
              const rules = {
                required: required ? "This field is required." : false,
              };

              if (name === "email") {
                rules.pattern = {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address.",
                };
              }

              if (name === "phone") {
                rules.pattern = {
                  value: /^\d{10}$/,
                  message: "Please enter a valid 10-digit phone number.",
                };
              }

              return rules;
            };

            return (
              <Col key={name} xl={6} className="mb-4">
                <div className={inputClassName}>
                  <input
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    id={name}
                    disabled={success}
                    {...register(name, getValidationRules())}
                  />
                  {errors[name] && (
                    <label htmlFor={name} className="contact-form__error">
                      {errors[name].message}
                    </label>
                  )}
                </div>
              </Col>
            );
          })}
          <Col xl={12}>
            <div className={`${inputClassName} ${messageClassName}`}>
              <textarea
                name="message"
                placeholder="Write a Message"
                disabled={success}
                {...register("message")}
              ></textarea>
            </div>
          </Col>
        </Row>
        <div className={btnBoxClassName}>
          <button
            type="submit"
            className={`thm-btn ${btnClassName} ${loading ? "loading" : ""} ${
              success ? "success" : ""
            }`}
            disabled={loading || success}
          >
            {success
              ? "Message Sent Successfully!"
              : loading
              ? "Sending..."
              : btnText}
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
