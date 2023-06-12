import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { ChatBotMessage } from './chatbot.message';
import { BotSocketService } from '../../services/bot-socket-service.service';
import { delay } from 'rxjs';

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
      };
      this.messages.push(message);
      this.isFetchingResponse = true;

      // Process user's message and get chatbot's response
      this.chatbotService.sendMessage(message.message);

      // Simulate a delay of 2 seconds before receiving the reply
      this.chatbotService.receivedReply()
        .pipe(delay(2000)) // Delay of 2 seconds
        .subscribe((x) => {
          const response: ChatBotMessage = {
            isChatbot: true,
            message: x.outputMessage,
          };
          this.messages.push(response);
          this.isFetchingResponse = false;
          this.newMessage = '';

          // Scroll to bottom after receiving the reply
          this.cdr.detectChanges();
          this.scrollToBottom();
        });
    }
  }
}

function processChatbotResponse(userMessage: string): string {
  // Process user's message and generate chatbot's response
  // Replace with your actual chatbot logic
  return 'This is the chatbot response for: ' + userMessage;
}
