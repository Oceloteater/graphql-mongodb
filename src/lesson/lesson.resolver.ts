import { Resolver, Query } from '@nestjs/graphql';
import { LessonType } from './lesson.type';

@Resolver((of) => LessonType)
export class LessonResolver {
  @Query((returns) => LessonType)
  lesson() {
    return {
      id: 'f3984jf34j0493f',
      name: 'My Lesson',
      startDate: '19/02/2023',
      endDate: '19/02/2024',
    };
  }
}
