/**
 * Copyright Siemens 2016 - 2025.
 * SPDX-License-Identifier: MIT
 */
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Filter, SiFilterBarComponent } from '@siemens/element-ng/filter-bar';
import { LOG_EVENT } from '@siemens/live-preview';

@Component({
  selector: 'app-sample',
  templateUrl: './si-filter-bar.html',
  host: { class: 'p-5' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SiFilterBarComponent]
})
export class SampleComponent {
  logEvent = inject(LOG_EVENT);

  filters: Filter[] = [
    {
      filterName: 'temperature',
      title: 'Temperature',
      description: '30°',
      status: 'default'
    },
    {
      filterName: 'time',
      title: 'Time',
      description: '10:10 AM',
      status: 'default'
    },
    {
      filterName: 'date',
      title: 'Date',
      description: '27-12-2022',
      status: 'default'
    },
    {
      filterName: 'company',
      title: 'Company',
      description: 'Siemens',
      status: 'default'
    },
    {
      filterName: 'location',
      title: 'Location',
      description: 'Zug',
      status: 'default'
    },
    {
      filterName: 'only-key',
      title: 'Only Key',
      description: '',
      status: 'default'
    },
    {
      filterName: 'only-value',
      title: '',
      description: 'Only Value',
      status: 'default'
    }
  ];
}
