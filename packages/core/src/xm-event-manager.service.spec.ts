import { TestBed } from '@angular/core/testing';

import { XmEventManagerService } from './xm-event-manager.service';

describe('XmEventManagerService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: XmEventManagerService = TestBed.inject<XmEventManagerService>(XmEventManagerService);
        expect(service).toBeTruthy();
    });
});
