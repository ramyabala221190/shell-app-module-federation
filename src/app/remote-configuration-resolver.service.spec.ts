import { TestBed } from '@angular/core/testing';

import { RemoteConfigurationResolverService } from './remote-configuration-resolver.service';

describe('RemoteConfigurationResolverService', () => {
  let service: RemoteConfigurationResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoteConfigurationResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
