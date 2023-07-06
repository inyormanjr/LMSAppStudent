import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { ChatBotMessage } from './chatbot.message';
import { BotSocketService } from '../../services/bot-socket-service.service';
import { async, delay } from 'rxjs';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css'],
})
export class ChatbotComponent implements AfterViewInit {
  @ViewChild('chatboxBody', { static: false }) chatboxBody!: ElementRef;
  isChatboxOpen: boolean = false;
  isFetchingResponse: boolean = false;
  isChatboxMaximized: boolean = false;
  messages: ChatBotMessage[] = [];
  newMessage: string = '';

  constructor(
    private cdr: ChangeDetectorRef,
    private chatbotService: BotSocketService
  ) {
    const response: ChatBotMessage = {
      isChatbot: true,
      message: 'Welcome to CCSCAI Chatbot.',
      isFetching: false,
    };
    this.messages.push(response);
  }

  toggleChatbox(): void {
    this.isChatboxOpen = !this.isChatboxOpen;
  }

  minimizeChatbox(): void {
    this.isChatboxMaximized = false;
  }

  maximizeChatbox(): void {
    this.isChatboxMaximized = true;
  }
  ngAfterViewInit(): void {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    this.chatboxBody.nativeElement.scrollTop =
      this.chatboxBody.nativeElement.scrollHeight;
  }

  sendMessage(): void {
    if (this.newMessage.trim() !== '') {
      const message: ChatBotMessage = {
        isChatbot: false,
        message: this.newMessage,
        isFetching: false,
      };
      this.messages.push(message);
      this.isFetchingResponse = true;

      // Process user's message and get chatbot's response
      this.chatbotService.sendMessage(message.message);
      this.createFetchingMessage();
      // Simulate a delay of 2 seconds before receiving the reply
      this.chatbotService.receivedReply()
        .subscribe((x) => {
          setTimeout(() => {
            this.removeisFetchingMessageFromMessages();
            const response: ChatBotMessage = {
              isChatbot: true,
              message: x.outputMessage,
              isFetching: false,
            };
            this.messages.push(response);
            // Scroll to bottom after receiving the reply
            this.cdr.detectChanges();
            this.scrollToBottom();
            this.isFetchingResponse = false;
            this.newMessage = '';
          }, 3000);

        });
    }
  }

  createFetchingMessage() {
    const message: ChatBotMessage = {
      isChatbot: true,
      message: '...',
      isFetching: true,
    };
    this.messages.push(message);
  }

  removeisFetchingMessageFromMessages() {
    this.messages = this.messages.filter((message) => {
      return !message.isFetching;
    });
  }
}



function processChatbotResponse(userMessage: string): string {
  // Process user's message and generate chatbot's response
  // Replace with your actual chatbot logic
  return 'This is the chatbot response for: ' + userMessage;
}
