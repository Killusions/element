/**
 * Copyright Siemens 2016 - 2025.
 * SPDX-License-Identifier: MIT
 */
import { Component, inject } from '@angular/core';
import { SiUnauthorizedPageModule } from '@siemens/element-ng/unauthorized-page';
import { LOG_EVENT } from '@siemens/live-preview';

@Component({
  selector: 'app-sample',
  templateUrl: './si-unauthorized-page-choice.html',
  imports: [SiUnauthorizedPageModule]
})
export class SampleComponent {
  logEvent = inject(LOG_EVENT);
}
