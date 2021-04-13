import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

const CURRENT_YEAR = new Date().getFullYear();

@Component({
    selector: 'app-manage-unicorn',
    templateUrl: './manage-unicorn.component.html',
    styleUrls: ['./manage-unicorn.component.scss'],
})
export class ManageUnicornComponent {
    public manageUnicornForm = this.fb.group({
        name: ['', [Validators.required]],
        birthyear: [CURRENT_YEAR, [Validators.required, Validators.min(1800), Validators.max(CURRENT_YEAR)]],
    });

    constructor(private readonly fb: FormBuilder) {}
}
