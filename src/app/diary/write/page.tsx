// src/app/diary/write/page.tsx

'use client';

import {saveDiaryEntry} from '@/services/diaryService';
import Link from 'next/link';
import {useState} from 'react';

export default function DiaryWrite() {
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSave = async (): Promise<void> => {
    if (content.trim() == '') {
      alert('저장할 메세지 작성!');
      return;
    }

    setIsLoading(true);
    setError(''); // 에러 하나 만들고

    try {
      await saveDiaryEntry(content);
      console.log('Save successful!');
      setContent('');
    } catch (e) {
      console.error('Error adding document: ', e);
      setError('글 저장하는 중 오류가 발생!');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold">My Diary</h1>
      <Link href={'/'} className="text-blue-400">
        Go to Home
      </Link>{' '}
      <br />
      <Link href={'/diary'} className="text-blue-400">
        Go to Diary
      </Link>{' '}
      <p>다이어리를 쓰시지요</p>
      <textarea
        value={content}
        className="border p-2"
        onChange={e => setContent(e.target.value)}
        placeholder="다이어리 작성하기!"
      />
      <br />
      <button onClick={handleSave} disabled={isLoading}>
        {isLoading ? '저장 중입니다!' : '저장!'}
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
