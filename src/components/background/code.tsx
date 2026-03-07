import { useEffect, useState } from "react";
import { Highlight, themes, Language } from "prism-react-renderer";

export const cppSample = `//
// Created by admin on 02.12.2024.
//

#include "SortingAlgorithms.h"
#include <string>
#include <iostream>

template<typename T>
void SortingAlgorithms::bubbleSort(std::vector<T> &arr) {
    if (arr.size() < 2) return;
    for (int i = 0; i < arr.size(); ++i) {
        for (int j = 0; j < arr.size() - i - 1; ++j) {
            if (arr[j] > arr[j + 1]) {
                std::swap(arr[j], arr[j + 1]);
            }
        }
    }
}

template<typename T>
void SortingAlgorithms::insertionSort(std::vector<T> &arr) {
    if (arr.size() < 2) return;
    // printArray(arr);
    for (int i = 1; i < arr.size(); i++) {
        int j = i;
        while (j > 0 && arr[j - 1] > arr[j]) {
            std::swap(arr[j - 1], arr[j]);
            j--;
        }
        // printArray(arr);
    }
}


template<typename T>
void SortingAlgorithms::selectionSort(std::vector<T> &arr) {
    // printArray(arr);
    if (arr.size() < 2) return;
    for (int i = 0; i < arr.size() - 1; i++) {
        int min_idx = i;
        for (int j = i + 1; j < arr.size(); ++j) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }

        std::swap(arr[i], arr[min_idx]);
        /*printArray(arr);*/
    }
}

template<typename T>
void SortingAlgorithms::mergeSort(std::vector<T> &arr, int left, int right) {
    if (arr.size() < 2) return;

    //flip right to arr size if -1
    if (right == -1) right = arr.size() - 1;

    //this is basecase
    if (left >= right) return;

    int mid = left + (right - left) / 2;

    //divide
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);

    //conquer
    merge(arr, left, mid, right);

    // printArray(arr);
}

template<typename T>
void SortingAlgorithms::merge(std::vector<T> &org, int left, int mid, int right) {
    //counter for the left
    int i = left;
    //counter for the right
    int j = mid + 1;

    int k = 0;
    //make a temporary array
    std::vector<T> temp(right - left + 1);

    //both non empty
    while (i <= mid && j <= right) {
        if (org[i] < org[j]) {
            temp[k] = org[i];
            i++;
        } else {
            temp[k] = org[j];
            j++;
        }
        k++;
    }

    //copy the empty cases
    while (i <= mid) {
        temp[k] = org[i];
        i++;
        k++;
    }
    while (j <= right) {
        temp[k] = org[j];
        j++;
        k++;
    }

    // copy the merged into the orginial
    for (int l = 0; l < temp.size(); l++) {
        org[left + l] = temp[l];
    }
}

template<typename T>
void SortingAlgorithms::quickSort(std::vector<T> &arr, int left, int right) {
    if (arr.size() < 2) return;

    //flip right to arr size if -10
    if (right == -10) right = arr.size() - 1;

    //this is basecase
    if (left >= right) return;

    int pivotIdx = partition(arr, left, right);

    // you are not supposed to sort the pivot itself
    quickSort(arr, left, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, right);
}

template<typename T>
int SortingAlgorithms::partition(std::vector<T> &arr, int left, int right) {
    int comparison_count = 0; // Counter for actual comparisons
    int i = left + 1;
    int j = right;
    T pivot = arr[left]; // Pivot as the first element

    while (true) {
        
        while (i <= right) {
            if (arr[i] > pivot) {
                break;
            }
            ++i;
        }

        
        while (j >= left + 1) {
            if (arr[j] < pivot) {
                ++comparison_count;
                break;
            }
            --j;
        }

        // If the pointers cross, break the loop
        if (i >= j) {
            break;
        }

        // Swap elements at "i" and "j"
        std::swap(arr[i], arr[j]);
    }


    std::swap(arr[left], arr[j]);


    return j; // Return the pivot position
}

//precondition nonnegative INT's
template<typename T>
void SortingAlgorithms::countingSort(std::vector<T> &arr) {
    if (arr.size() < 2) return;

    //step 1: find the maximum
    int max = getMaximum(arr);
    // int min = getMinimum(arr);
    // int range = max - min + 1;


    //initiallizing the count array
    std::vector<int> countArr(max + 1);

    //frequency
    for (int i = 0; i < arr.size(); ++i) {
        ++countArr[arr[i]];
    }

    //make indexes nice
    for (int i = 1; i < countArr.size(); ++i) {
        countArr[i] += countArr[i - 1];
    }

    //make temporary array
    std::vector<T> tempArr(arr.size());
    for (int i = tempArr.size() - 1; i >= 0; --i) {
        tempArr[countArr[arr[i]] - 1] = arr[i];
        --countArr[arr[i]];
    }

    // printArray(countArr);

    for (int i = 0; i < tempArr.size(); ++i) {
        arr[i] = tempArr[i];
    }
}

//precondition only for initgers, this is not a requirment of an algorithm but for simplicity sake
template<typename T>
void SortingAlgorithms::radixSort(std::vector<T> &arr) {
    if (arr.size() < 2) return;

    // 1. ge the maxium number

    int m = getMaximum(arr);
    // 2. countsort on every digit.
    for (int exp = 1; m / exp > 0; exp *= 10) {
        // I need to rewrite countSort for radix sort to be able to sort just by the digit
        countingSortforRadix(arr, exp);
        // printArray(arr);
    }
}

template<typename T>
void SortingAlgorithms::countingSortforRadix(std::vector<T> &arr, int exp) {
    if (arr.size() < 2) return;

    //step 1: find the maximum
    int max = getMaximum(arr);


    //initiallizing the count array
    std::vector<int> countArr(max + 1);

    //frequency
    for (int i = 0; i < arr.size(); ++i) {
        const int index = (arr[i] / exp) % 10;
        ++countArr[index];
    }

    //make indexes nice
    for (int i = 1; i < countArr.size(); ++i) {
        countArr[i] += countArr[i - 1];
    }

    //make temporary array
    std::vector<T> tempArr(arr.size());
    for (int i = tempArr.size() - 1; i >= 0; --i) {
        const int index = (arr[i] / exp) % 10;
        tempArr[countArr[index] - 1] = arr[i];
        --countArr[index];
    }

    // printArray(countArr);

    for (int i = 0; i < tempArr.size(); ++i) {
        arr[i] = tempArr[i];
    }
}

template<typename T>
T SortingAlgorithms::getMaximum(std::vector<T> &arr) {
    if (arr.empty()) {
        throw std::invalid_argument("Array is empty");
    }
    T max = arr[0];
    for (int i = 1; i < arr.size(); ++i) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

template<typename T>
T SortingAlgorithms::getMinimum(std::vector<T> &arr) {
    if (arr.empty()) {
        throw std::invalid_argument("Array is empty");
    }
    T min = arr[0];
    for (int i = 1; i < arr.size(); ++i) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
}


//all types generations

template
void SortingAlgorithms::bubbleSort<int>(std::vector<int> &arr);

template
void SortingAlgorithms::bubbleSort<float>(std::vector<float> &arr);

template
void SortingAlgorithms::bubbleSort<double>(std::vector<double> &arr);

template
void SortingAlgorithms::bubbleSort<std::string>(std::vector<std::string> &arr);


template
void SortingAlgorithms::insertionSort<int>(std::vector<int> &arr);

template
void SortingAlgorithms::insertionSort<float>(std::vector<float> &arr);

template
void SortingAlgorithms::insertionSort<double>(std::vector<double> &arr);


template
void SortingAlgorithms::selectionSort<int>(std::vector<int> &arr);

template
void SortingAlgorithms::selectionSort<float>(std::vector<float> &arr);

template
void SortingAlgorithms::selectionSort<double>(std::vector<double> &arr);


template
void SortingAlgorithms::mergeSort<int>(std::vector<int> &arr, int left, int right);

template
void SortingAlgorithms::mergeSort<float>(std::vector<float> &arr, int left, int right);

template
void SortingAlgorithms::mergeSort<double>(std::vector<double> &arr, int left, int right);


template
void SortingAlgorithms::merge<int>(std::vector<int> &org, int left, int mid, int right);

template
void SortingAlgorithms::merge<float>(std::vector<float> &org, int left, int mid, int right);

template
void SortingAlgorithms::merge<double>(std::vector<double> &org, int left, int mid, int right);

template
void SortingAlgorithms::quickSort<int>(std::vector<int> &arr, int left, int right);

template
void SortingAlgorithms::quickSort<float>(std::vector<float> &arr, int left, int right);

template
void SortingAlgorithms::quickSort<double>(std::vector<double> &arr, int left, int right);

template
int SortingAlgorithms::partition<int>(std::vector<int> &arr, int left, int right);

template
int SortingAlgorithms::partition<float>(std::vector<float> &arr, int left, int right);

template
int SortingAlgorithms::partition<double>(std::vector<double> &arr, int left, int right);

template
void SortingAlgorithms::countingSort<int>(std::vector<int> &arr);

template
void SortingAlgorithms::radixSort<int>(std::vector<int> &arr);

template
void SortingAlgorithms::countingSortforRadix<int>(std::vector<int> &arr, int exp);

template
int SortingAlgorithms::getMaximum<int>(std::vector<int> &arr);

template
float SortingAlgorithms::getMaximum<float>(std::vector<float> &arr);

template
double SortingAlgorithms::getMaximum<double>(std::vector<double> &arr);

template
std::string SortingAlgorithms::getMaximum<std::string>(std::vector<std::string> &arr);

template
int SortingAlgorithms::getMinimum<int>(std::vector<int> &arr);

template
float SortingAlgorithms::getMinimum<float>(std::vector<float> &arr);

template
double SortingAlgorithms::getMinimum<double>(std::vector<double> &arr);

template
std::string SortingAlgorithms::getMinimum<std::string>(std::vector<std::string> &arr);


`;

interface CodeBackgroundProps {
  code: string;
  language: Language;
  className?: string;
}

export default function CodeBackground({
  code,
  language,
  className,
}: CodeBackgroundProps) {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;

    const updateTheme = () => {
      setIsDark(root.classList.contains("dark"));
    };

    updateTheme();

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          updateTheme();
        }
      });
    });

    observer.observe(root, { attributes: true });

    return () => observer.disconnect();
  }, []);

  const syntaxTheme = isDark ? themes.dracula : themes.github;

  return (
    <div
      className={`font-mono text-sm leading-relaxed select-none ${className}`}
      aria-hidden="true"
    >
      <Highlight theme={syntaxTheme} code={code} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={className}
            // Strips the background color so your Vite app's background shows through
            style={{ ...style, backgroundColor: "transparent" }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
