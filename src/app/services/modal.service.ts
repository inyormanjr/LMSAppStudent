import {
  Injectable,
  ComponentFactoryResolver,
  Injector,
  ApplicationRef,
  EmbeddedViewRef,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef
  ) {}

  openModal(component: any): void {
    const modalElement = document.createElement('div');
    modalElement.classList.add('modal', 'fade', 'show');
    modalElement.innerHTML = `
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Custom Modal</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body"></div>
        </div>
      </div>
      <div class="modal-backdrop fade show"></div>
    `;

    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(component);
    const componentRef = componentFactory.create(this.injector);
    this.appRef.attachView(componentRef.hostView);
    const modalBody = modalElement.querySelector('.modal-body');

    if (modalBody) {
      modalBody.appendChild(
        (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0]
      );
    } else {
      throw new Error('Modal container not found');
    }

    document.body.appendChild(modalElement);

    const closeModal = () => {
      document.body.removeChild(modalElement);
      this.appRef.detachView(componentRef.hostView);
      componentRef.destroy();
    };

    const closeButtons = modalElement.querySelectorAll(
      '[data-bs-dismiss="modal"]'
    );
    closeButtons.forEach((button) => {
      button.addEventListener('click', closeModal);
    });

    modalElement.addEventListener('hidden.bs.modal', closeModal);
  }
}
