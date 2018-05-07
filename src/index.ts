import { NgModule, Compiler, ModuleWithProviders, COMPILER_OPTIONS, CompilerFactory, forwardRef } from "@angular/core";
import { JitCompilerFactory } from "@angular/platform-browser-dynamic";
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample.component';
import { SampleDirective } from './sample.directive';
import { HtmlOutlet } from './html-outlet';
import { SamplePipe } from './sample.pipe';
import { SampleService } from './sample.service';

export * from './sample.component';
export * from './sample.directive';
export * from './html-outlet';
export * from './sample.pipe';
export * from './sample.service';

export function createCompiler(compilerFactory: CompilerFactory) {
    return compilerFactory.createCompiler();
}

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SampleComponent,
    SampleDirective,
    SamplePipe,
    HtmlOutlet
  ],
  exports: [
    SampleComponent,
    SampleDirective,
    SamplePipe,
    HtmlOutlet
  ]
  , providers: [
         { provide: COMPILER_OPTIONS, useValue: { }, multi: true },
        { provide: CompilerFactory, useClass: JitCompilerFactory, deps: [COMPILER_OPTIONS] },
        { provide: Compiler, useFactory: createCompiler, deps: [CompilerFactory] }
    ]
})
export class SampleModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SampleModule,
      providers: [SampleService]
    };
  }
}
