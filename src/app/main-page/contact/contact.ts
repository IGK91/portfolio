import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private formBuilder = inject(FormBuilder);

  emailPattern = '[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,}';

  // Die Textfelder werden erst geprüft, wenn man sie verlässt (updateOn: 'blur')
  contactForm = this.formBuilder.nonNullable.group({
    name: ['', { validators: [Validators.required, Validators.minLength(2)], updateOn: 'blur' }],
    email: ['', { validators: [Validators.required, Validators.pattern(this.emailPattern)], updateOn: 'blur' }],
    message: ['', { validators: [Validators.required, Validators.minLength(10)], updateOn: 'blur' }],
    privacy: [false, Validators.requiredTrue],
  });

  get name() {
    return this.contactForm.controls.name;
  }

  get email() {
    return this.contactForm.controls.email;
  }

  get message() {
    return this.contactForm.controls.message;
  }

  get privacy() {
    return this.contactForm.controls.privacy;
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.contactForm.reset();
  }
}
