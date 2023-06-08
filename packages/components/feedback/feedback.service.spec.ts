import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { FeedbackService } from './feedback.service';

describe('FeedbackService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
    }));

    it('should be created', () => {
        const service: FeedbackService = TestBed.inject<FeedbackService>(FeedbackService);
        expect(service).toBeTruthy();
    });
});
