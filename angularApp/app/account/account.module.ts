import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { UserService } from '../core/services/user.service';

import { EmailValidator } from '../directives/email.validator.directive';

import { AccountRouting } from './account.routing';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FacebookLoginComponent } from './facebook-login/facebook-login.component';


@NgModule({
	imports: [
		CommonModule, FormsModule, AccountRouting, SharedModule
	],
	declarations: [
		RegistrationFormComponent,
		EmailValidator,
		LoginFormComponent,
		FacebookLoginComponent
	],
	providers: [UserService]
})
export class AccountModule { }
